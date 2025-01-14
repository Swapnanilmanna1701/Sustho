const GradientFillButton = () => {
    return (
      <button className="group/button relative overflow-hidden rounded-full border border-violet-700 bg-white px-4 py-2 text-lg font-medium text-violet-500 transition-all duration-150 hover:border-violet-500 active:scale-95">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-violet-700 to-violet-500 transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
          SignIn
        </span>
      </button>
    )
  }
  
  export default GradientFillButton;