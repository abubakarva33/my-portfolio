import "./HomeTemplate.css";

const HomeTemplate = () => {
  return (
    <div className="homeContainer">
      <div className="ms-5">
        <h1>Abubakar Siddik</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque saepe deleniti, enim
          temporibus est iste inventore, magnam sunt repudiandae quam eos possimus exercitationem
          distinctio libero aliquam sapiente atque velit? Officiis optio dicta, nam iure officia
          unde ut, dolorum veritatis voluptatum doloribus vel corporis modi, porro nihil? Eligendi
          dolorem quia ipsa?
        </p>
        <button>download</button>
      </div>
      <div className="designationContainer">
        <div className="designationInnerContainer">
          <h4 className="designationItem1">Web Developer</h4>
          <h4 className="designationItem2">Web Designer</h4>
          <h4 className="designationItem3">Front-End Developer</h4>
          <h4 className="designationItem4">Developer</h4>
          <div className="designationCircle"></div>
        </div>
        <div className="overlay"></div>
        {/* <img src="/Images/profile.webp" alt="" className="homeImg"/> */}
      </div>
    </div>
  );
};

export default HomeTemplate;
