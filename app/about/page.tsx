"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function AboutPage() {
  const techStack = [
    {
      title: "Authentication",
      description: "Secured with Clerk for user management and authentication",
    },
    {
      title: "Frontend",
      description: "Next.js 13 App Router, React, TypeScript, Tailwind CSS, shadcn/ui",
    },
    {
      title: "Database",
      description: "Clerk Metadata for secure password storage and user data management",
    },
    {
      title: "Features",
      description: "Password generation, secure storage, easy management, and organization",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center"
        variants={itemVariants}
      >
        About Password Manager
      </motion.h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <MotionCard variants={itemVariants}>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A secure and modern password management solution built with the latest web technologies.
              Store, generate, and manage your passwords with confidence using industry-standard
              security practices.
            </p>
          </CardContent>
        </MotionCard>

        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
        >
          {techStack.map((tech, index) => (
            <MotionCard key={index} variants={itemVariants}>
              <CardHeader>
                <CardTitle className="text-xl">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>

        <MotionCard variants={itemVariants}>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your data is protected using Clerk&apos;s secure authentication and metadata storage.
              We employ industry best practices to ensure your passwords remain private and
              protected at all times.
            </p>
          </CardContent>
        </MotionCard>
      </div>
    </motion.div>
  );
}
