import SimpleSlider from "src/shared/components/SimpleSlider";
import Home1 from "src/assets/imgs/home2.jpg";
import Home2 from "src/assets/imgs/home3.jpg";
const Home = () => {
  return (
    <div className="absolute top-0 z-[-1] bg-[#1b1b1b] w-full    ">
      <div className="w-full  z-[-1]">
        <SimpleSlider />
        {/* <img src={naTural} alt="NaTural " /> */}
      </div>
      <div className="grid grid-cols-2 mx-36 gap-8 py-[90px]">
        <div className="flex flex-col gap-3">
          <span className="text-[15px] text-white font-Mukta tracking-[3px] before:inline-block before:relative before:top-[-2px] before:left-[-15px] before:ml-[20px] before:w-[59px] before:h-[1px] before:bg-red-500">
            STEAKHOUSE + BAR
          </span>
          <h1 className="text-[60px] font-PirateOne text-white">
            <span className="text-red-700">Welcome to</span> Winta
          </h1>
          <p className="text-[15px] text-white font-Mukta mb-1">
            Quality the nunc bibe endum in finibus elit eget they solli citudin
            elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend
            tortor orci eu ornare tortor semta. Duis scelerisque the nise duru
            the look. Liwense eu nunc bibe endum in finibus elit eget the solli
            citudin elit. Drae tnea rutierum in lacus.
          </p>
          <p className="text-[15px] text-white font-Mukta">
            Duis scelerisque the nibhse drana moss pulvinar laie. Quality the
            biberon endumn finbus elit egethe solli citudin elit. Phasellus
            rutrum inle lacusut euismod. Vestibue eleifend tortor eu misse
            endumin finbus elit eget the soli citudin elit. Winta the nunc bibe
            endum in finibus elit eget they solli citudin elit. Phaselu the
            rutrum in lacusu euismod. Vestibulum eleifend tortor orci ornare
            torte sempeni. Luiste scelerisque the nise duru the look.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full col-span-2 overflow-hidden">
            <img
              className="h-[320px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
              src={Home1}
              alt=""
            />
          </div>
          <div className="w-full overflow-hidden">
            <img
              className="h-[200px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
              src={Home2}
              alt=""
            />
          </div>
          <div className="w-full overflow-hidden">
            <img
              className="h-[200px] w-full duration-200 hover:scale-[1.08] hover:duration-200 object-cover	"
              src={Home2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
