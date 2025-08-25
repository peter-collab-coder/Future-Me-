import { LucideIcon } from 'lucide-react';

interface IconProps {
    icon: LucideIcon;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className }) => {
    return <IconComponent className={`w-6 h-6 ${className}`} />;
};

export default Icon;