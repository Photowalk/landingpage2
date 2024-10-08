import React, { useState, useEffect } from 'react';
import { Dna, Microscope, Leaf, Brain, Utensils, ChevronRight } from 'lucide-react';

const BioTechLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'genomics':
        return <VideoContent videoId="128e447a-6ca9-4b8d-8d1a-57f986fdb467" title="基因组学：创造优秀设计" />;
      case 'cellbiology':
        return <VideoContent videoId="128e447a-6ca9-4b8d-8d1a-57f986fdb467" title="细胞生物学：探索生命的基本单位" />;
      case 'syntheticbiology':
        return <VideoContent videoId="128e447a-6ca9-4b8d-8d1a-57f986fdb467" title="合成生物学：设计生命的新形式" />;
      case 'neuroscience':
        return <VideoContent videoId="128e447a-6ca9-4b8d-8d1a-57f986fdb467" title="神经科学：揭示大脑的奥秘" />;
      case 'biofood':
        return <VideoContent videoId="60ecc9a0-ba7d-41ee-b7ce-e38d3df9bd4f" title="生物美食：宫保鸡丁的科学" />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 动态背景 */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* 主要内容 */}
      <div className="relative">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">BioTech Frontier</h1>
            <ul className="hidden md:flex space-x-6">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-green-400 transition-colors">首页</button></li>
              <li><button onClick={() => setCurrentPage('genomics')} className="hover:text-green-400 transition-colors">基因组学</button></li>
              <li><button onClick={() => setCurrentPage('cellbiology')} className="hover:text-green-400 transition-colors">细胞生物学</button></li>
              <li><button onClick={() => setCurrentPage('syntheticbiology')} className="hover:text-green-400 transition-colors">合成生物学</button></li>
              <li><button onClick={() => setCurrentPage('neuroscience')} className="hover:text-green-400 transition-colors">神经科学</button></li>
              <li><button onClick={() => setCurrentPage('biofood')} className="hover:text-green-400 transition-colors">生物美食</button></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          {renderContent()}
        </main>
      </div>

      <footer className="bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BioTech Frontier. 推动生物学的边界，塑造更美好的未来。</p>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => (
  <>
    <section className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-6">
        探索生命的奥秘
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        通过尖端科技和创新方法，我们正在揭示生物学的前沿，重新定义人类对生命的理解。
      </p>
      <button className="bg-green-500 text-black font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-green-400 transition-colors">
        加入我们的探索 <ChevronRight className="ml-2" />
      </button>
    </section>

    <section className="flex flex-nowrap overflow-x-auto pb-4 mb-20 -mx-4 px-4">
      <FeatureCard 
        icon={<Dna className="w-8 h-8" />}
        title="基因组学"
        description="解码生命的蓝图，探索DNA的无限可能。"
        onClick={() => setCurrentPage('genomics')}
      />
      <FeatureCard 
        icon={<Microscope className="w-8 h-8" />}
        title="细胞生物学"
        description="深入细胞内部，揭示生命的基本单位。"
        onClick={() => setCurrentPage('cellbiology')}
      />
      <FeatureCard 
        icon={<Leaf className="w-8 h-8" />}
        title="合成生物学"
        description="设计和构建新的生物系统和功能。"
        onClick={() => setCurrentPage('syntheticbiology')}
      />
      <FeatureCard 
        icon={<Brain className="w-8 h-8" />}
        title="神经科学"
        description="探索大脑的奥秘，解密思维和意识。"
        onClick={() => setCurrentPage('neuroscience')}
      />
      <FeatureCard 
        icon={<Utensils className="w-8 h-8" />}
        title="生物美食"
        description="探索食物背后的生物学原理。"
        onClick={() => setCurrentPage('biofood')}
      />
    </section>
  </>
);

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="flex-shrink-0 w-64 mr-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer" onClick={onClick}>
      <div className="mb-3 text-green-400">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const VideoContent = ({ videoId, title }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={title}
          width="560"
          height="315"
          src={`https://v.english.vg/videos/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default BioTechLandingPage;