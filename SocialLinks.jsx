import React from 'react';

function SocialLinks() {
  return (
    <section className="z-10 relative py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Join us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          🟢 Discord
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;
