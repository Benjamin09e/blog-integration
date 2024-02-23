import React, { useState, useEffect } from 'react';
import './style.css'
import axios from 'axios';

export const BlogIntegration = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://api.medium.com/v1/users/${name}/posts`, {
                    headers: {
                        Authorization: '---',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                setPosts(response.data.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des publications Medium:', error);
            }
        };

        fetchPosts();
    }, [name]);

    return (
        <div>
            <h2>Publications Medium de {name}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
