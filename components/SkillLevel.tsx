interface Prop {
    skillLevel: string
}
const SkillLevel = ({skillLevel}:Prop) => {
  const level = () => {
      const value = skillLevel
    switch (value) {
      case "beginner":
        return (
          <>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-300"></div>
            <div className="p-1 bg-gray-300"></div>
            <div className="p-1 bg-gray-300"></div>
          </>
        );
      case "good":
        return (
          <>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-300"></div>
            <div className="p-1 bg-gray-300"></div>
          </>
        );
      case "intermediate":
        return (
          <>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-300"></div>
          </>
        );
      case "advanced":
        return (
          <>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
            <div className="p-1 bg-gray-700"></div>
          </>
        );

      default:
        return (
            <>
              <div className="p-1 bg-gray-700"></div>
              <div className="p-1 bg-gray-300"></div>
              <div className="p-1 bg-gray-300"></div>
              <div className="p-1 bg-gray-300"></div>
            </>
          );
    }
  };
  return <div className="flex space-x-2">{level()}</div>;
};

export default SkillLevel;
