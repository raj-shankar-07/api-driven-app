const mongoose = require('mongoose');


const RepoSchema = new mongoose.Schema({
    repoId: { type: Number, required: true, unique: true },
    name: String,
    full_name: String,
    html_url: String,
    description: String,
    stargazers_count: Number,
    language: String,
    fetchedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Repo', RepoSchema);