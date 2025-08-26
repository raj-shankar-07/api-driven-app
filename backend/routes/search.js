const express = require('express');
const axios = require('axios');
const Repo = require('../models/Repo');
const router = express.Router();


// POST /api/search { q: "keyword" }
router.post('/', async (req, res) => {
    try {
        const { q } = req.body;
        if (!q) return res.status(400).json({ error: 'Missing query' });


        // Use GitHub Search API
        const params = new URLSearchParams({ q, per_page: '10' });
        const url = `https://api.github.com/search/repositories?${params.toString()}`;


        const headers = {};
        if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;


        const githubRes = await axios.get(url, { headers });
        const items = githubRes.data.items || [];


        // Map and upsert each repo into MongoDB
        const ops = items.map(item => ({
            updateOne: {
                filter: { repoId: item.id },
                    update: {
                    $set: {
                        repoId: item.id,
                        name: item.name,
                        full_name: item.full_name,
                        html_url: item.html_url,
                        description: item.description,
                        stargazers_count: item.stargazers_count,
                        language: item.language,
                        fetchedAt: new Date()
                    }
                },
                upsert: true
            }
        }));


        if (ops.length) await Repo.bulkWrite(ops);


        // Return saved/returned items to client
        const saved = await Repo.find({ repoId: { $in: items.map(i => i.id) } }).sort({ stargazers_count: -1 });
        res.json({ ok: true, count: saved.length, data: saved });


    } catch (err) {
        console.error(err.message || err);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;