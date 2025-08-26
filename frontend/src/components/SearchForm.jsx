import React, { useState } from 'react';


export default function SearchForm({ onSearch }) {
    const [q, setQ] = useState('');
    const [loading, setLoading] = useState(false);


    async function submit(e) {
        e.preventDefault();
        if (!q) return;
        setLoading(true);
        try {
            await onSearch(q);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <form onSubmit={submit} className="search-form">
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Enter keyword (e.g. react)" />
            <button type="submit">{loading ? 'Searching...' : 'Search'}</button>
        </form>
    );
}