import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">About Password Manager</h1>
            <div className="space-y-4">
                <section>
                    <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                    <p className="text-gray-700">
                        Our Password Manager is a secure and user-friendly application designed to help you store and manage your passwords safely. We use advanced encryption to protect your sensitive information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Secure password storage with strong encryption</li>
                        <li>Password generator for creating strong passwords</li>
                        <li>Easy-to-use interface</li>
                        <li>Cross-platform compatibility</li>
                        <li>Auto-fill capability</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Security First</h2>
                    <p className="text-gray-700">
                        Your security is our top priority. We implement industry-standard encryption protocols and best practices to ensure your passwords remain safe and private.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;