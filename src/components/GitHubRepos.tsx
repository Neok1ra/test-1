import { useState, useEffect, useRef, PropsWithChildren } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Light's GitHub username
  const username = 'Neok1ra';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        
        if (!response.ok) {
          throw new Error(`Error fetching repositories: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load repositories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-red-50">
            Light's Projects
          </p>

          <p className="max-w-md font-circular-web text-lg text-red-50 opacity-50">
            Explore open source projects and contributions. These repositories showcase coding style, 
            problem-solving approach, and the technologies used.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : error ? (
          <div className="border-hsla relative mb-7 overflow-hidden rounded-md p-8">
            <div className="flex items-center gap-4">
              <svg className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="font-circular-web text-lg text-red-400">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {repos.slice(0, 6).map((repo) => (
              <BentoTilt key={repo.id} className="border-hsla relative overflow-hidden rounded-md">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block size-full"
                >
                  <article className="relative size-full bg-red-900/10 backdrop-blur-sm">
                    <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h1 className="bento-title special-font text-2xl md:text-3xl text-red-400">
                            {repo.name}
                          </h1>
                          {repo.language && (
                            <span className="px-3 py-1 text-xs font-medium bg-red-900/50 text-red-300 rounded-full border border-red-500/50">
                              {repo.language}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-lg mt-3 max-w-64 md:text-base text-gray-300 line-clamp-3">
                          {repo.description || 'No description provided'}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-400">
                          Updated {formatDate(repo.updated_at)}
                        </span>
                        <TiLocationArrow className="scale-[2] text-red-400" />
                      </div>
                    </div>
                  </article>
                </a>
              </BentoTilt>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};