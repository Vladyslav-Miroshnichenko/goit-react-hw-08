import module from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={module.homeDiv}>
      <p className={module.title}>
        Hi there! Welcome to the personal contacts website. Here you can keep
        your contacts safe, add new ones and delete ones you don't need anymore.
        To use all the privileges just join the community and we hope you will
        enjoy it
      </p>
    </div>
  );
};

export default HomePage;
