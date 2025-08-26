import React from 'react';


export default function Dashboard({ repos }) {
    if (!repos || repos.length === 0) return <p>No results yet — try a search.</p>;


    return (
        <div className="dashboard">
            {repos.map(r => (
            <div key={r.repoId} className="card">
                <a href={r.html_url} target="_blank" rel="noreferrer"><h3>{r.full_name}</h3></a>
                <p>{r.description}</p>
                <div className="meta">
                    <span>⭐ {r.stargazers_count}</span>
                    <span>{r.language}</span>
                    <span>{new Date(r.fetchedAt).toLocaleString()}</span>
                </div>
            </div>
            ))}
        </div>
    );
}