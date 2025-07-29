import React from 'react';

interface LoadingScreenProps {
  isInitial?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isInitial = false }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo with enhanced animation */}
        <div className={`flex items-center gap-4 ${isInitial ? 'animate-fade-in' : ''}`}>
          <img 
            src="/LogoLb.png" 
            alt="Light Bulb Logo" 
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain animate-pulse"
          />
          <img 
            src="/LogoAndName - Copy.png" 
            alt="Light Bulb Name Logo" 
            className="h-16 w-auto sm:h-20 object-contain animate-pulse"
          />
        </div>
        
        {/* Loading text with gradient - only show on initial load */}
        {isInitial && (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              LIGHT BULB
            </h1>
            <p className="text-gray-600 text-lg">Solutions Électriques Professionnelles</p>
          </div>
        )}
        
        {/* Enhanced loading animation */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-spin"></div>
          <span className="text-gray-600 font-medium text-lg">Chargement...</span>
        </div>
        
        {/* Progress bar - only show on initial load */}
        {isInitial && (
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen; 