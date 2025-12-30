import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Onboarding } from "@/pages/onboarding";
import { Dashboard } from "@/pages/dashboard";
import { Settings } from "@/pages/settings";
import { storage } from "@/lib/storage";

function Router() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [currentPage, setCurrentPage] = useState<'onboarding' | 'dashboard' | 'settings'>('onboarding');

  useEffect(() => {
    const completed = storage.hasCompletedOnboarding();
    setHasOnboarded(completed);
    if (completed) {
      setCurrentPage('dashboard');
    }
  }, []);

  const handleCompleteOnboarding = () => {
    storage.completeOnboarding();
    setHasOnboarded(true);
    setCurrentPage('dashboard');
  };

  const handleNavigateToSettings = () => {
    setCurrentPage('settings');
  };

  const handleNavigateBack = () => {
    setCurrentPage('dashboard');
  };

  // Show onboarding if not completed
  if (!hasOnboarded) {
    return <Onboarding onComplete={handleCompleteOnboarding} />;
  }

  // Show current page
  switch (currentPage) {
    case 'settings':
      return <Settings onNavigateBack={handleNavigateBack} />;
    case 'dashboard':
    default:
      return <Dashboard onNavigateToSettings={handleNavigateToSettings} />;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
