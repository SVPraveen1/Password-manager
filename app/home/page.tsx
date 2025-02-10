'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8"
        >
            <div className="container mx-auto px-4 py-8">
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl font-bold mb-8 text-slate-800 dark:text-white text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    Welcome to Your Password Manager
                </motion.h1>

                <motion.div variants={itemVariants} className="space-y-6">
                    <motion.section
                        whileHover={{ scale: 1.02 }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">What We Do</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Our Password Manager is a secure and user-friendly application designed to help you store and manage your passwords safely. We use advanced encryption to protect your sensitive information.
                        </p>
                    </motion.section>

                    <motion.section
                        whileHover={{ scale: 1.02 }}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Secure password storage with strong encryption",
                                "Password generator for creating strong passwords",
                                "Easy-to-use interface",
                                "Cross-platform compatibility",
                                "Auto-fill capability"
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center text-slate-600 dark:text-slate-300"
                                >
                                    <span className="mr-2">→</span>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        whileHover={{ scale: 1.02 }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">Security First</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Your security is our top priority. We implement industry-standard encryption protocols and best practices to ensure your passwords remain safe and private.
                        </p>
                    </motion.section>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;