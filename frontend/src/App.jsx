import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import Dashboard from './components/Dashboard';
import axios from 'axios';


export default function App() {
    const [repos, setRepos] = useState([]);

    async function handleSearch(q) {
        const res = await axios.post('https://api-driven-app-backend.onrender.com', { q });
        if (res.data && res.data.data) setRepos(res.data.data);
    }

    return (
        <div className="app">
            <header>
                <h1>Repo Finder</h1>
            </header>
            <main>
                <SearchForm onSearch={handleSearch} />
                <Dashboard repos={repos} />
            </main>
        </div>
    );
}
