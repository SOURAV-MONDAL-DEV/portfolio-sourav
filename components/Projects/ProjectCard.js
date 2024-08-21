

const ProjectCard = () => {
  return (
    <div className="max-w-sm lg:max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg ">
      <img 
        className="w-full h-48 object-cover" 
        src="https://placehold.co/400x300?text=Profile+Image" 
        alt="Profile Image" 
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-primary-foreground">Bonnie Green</h2>
        <p className="text-muted-foreground">CTO & Co Founder</p>
        <p className="mt-2 text-muted-foreground">
          Bonnie drives the technical strategy of the themesberg platform and brand.
        </p>
        <div className="mt-4 flex space-x-3">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <img aria-hidden="true" alt="twitter" src="https://openui.fly.dev/openui/24x24.svg?text=🐦" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <img aria-hidden="true" alt="github" src="https://openui.fly.dev/openui/24x24.svg?text=🐙" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <img aria-hidden="true" alt="dribbble" src="https://openui.fly.dev/openui/24x24.svg?text=🏀" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
