import React from 'react';

interface DashboardSectionProps {
    title: string;
    children: React.ReactNode;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ title, children }) => {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="fade-in">{children}</div>
        </div>
    );
};

export default DashboardSection;