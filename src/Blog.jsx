import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Blog!</h2>
            <p><b>What is an access token and refresh token? How do they work and where should we store them on the client-side?</b></p>
            <p>- Access Tokens are used to access protected resources (like APIs), and Refresh Tokens are used to request new Access Tokens without requiring the user to log in again. And these should be stored in httpOnly cookie.</p>
            <p><b>Compare SQL and NoSQL databases?</b></p>
            <p>- There are two primary databases used for storing digital data: SQL (relational databases) and NoSQL (non-relational databases). Though both methods effectively store data, they differ in their structures, scalability, relationships, language, and support.</p>
            <p><b>What is express js? What is Nest JS?</b></p>
            <p>- Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. <br />
            Nest.js is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.</p>
            <p><b>What is MongoDB aggregate and how does it work?</b></p>
            <div>Aggregation operations process multiple documents and return computed results. You can use aggregation operations to:
                <ul>
                    <li>Group values from multiple documents together.</li>
                    <li>Perform operations on the grouped data to return a single result.</li>
                    <li>Analyze data changes over time.</li>
                </ul></div>
        </div>
    );
};

export default Blog;