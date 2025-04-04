import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react"; 

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for Developers",
      description: "Designed for engineers, developers, innovators, and creators who want to code smarter.",
      icon: <IconTerminal2 className="text-neutral-400" />,
    },
    {
      title: "Real-Time Code Generation",
      description: "Generate, edit, and visualize your project instantly with AI-powered assistance.",
      icon: <IconEaseInOut className="text-neutral-400" />,
    },
    {
      title: "Flexible and Accessible",
      description: "Use LiftCode without any setup—just start coding and bring your ideas to life.",
      icon: <IconCloud className="text-neutral-400" />,
    },
    {
      title: "Credit-Based System",
      description: "Get started with free credits and upgrade as needed for extended usage.",
      icon: <IconCurrencyDollar className="text-neutral-400" />,
    },
    {
      title: "Seamless Collaboration",
      description: "Work on projects effortlessly, export code, or upload directly when you're ready.",
      icon: <IconRouteAltLeft className="text-neutral-400" />,
    },
    {
      title: "AI-Powered Efficiency",
      description: "Save time and boost productivity with intelligent code suggestions and optimizations.",
      icon: <IconAdjustmentsBolt className="text-neutral-400" />,
    },
    {
      title: "High-Quality Code",
      description: "LiftCode generates clean, well-structured code that meets industry standards.",
      icon: <IconHelp className="text-neutral-400" />,
    },
    {
      title: "Always Evolving",
      description: "We're constantly improving LiftCode to make AI-assisted coding better every day.",
      icon: <IconHeart className="text-neutral-400" />,
    },
];

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-600",
        (index === 0 || index === 4) && "lg:border-l border-neutral-600",
        index < 4 && "lg:border-b border-neutral-600"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-neutral-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired
};