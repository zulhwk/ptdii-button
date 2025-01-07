import Button from "./components/Button";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="flex justify-center items-center gap-2 h-screen">
      <div className="flex flex-col gap-5">
        <div>
          <h6>VARIANTS</h6>
          <div className="flex gap-1 mt-1">
            <Button variant={"solid"}>SOLID (DEFAULT)</Button>
            <Button variant={"outlined"}>OUTLINED</Button>
            <Button variant={"text"}>TEXT</Button>
          </div>
        </div>
        <div>
          <h6>SIZES</h6>
          <div className="mt-1">
            <Button variant={"solid"} size={"small"} className="m-1">
              SMALL
            </Button>
            <Button variant={"outlined"} size={"medium"} className="m-1">
              MEDIUM (DEFAULT)
            </Button>
            <Button variant={"text"} size={"large"} className="m-1">
              LARGE
            </Button>
          </div>
        </div>
        <div>
          <h6>COLORS</h6>
          <div className="flex gap-1 mt-1">
            <Button variant={"solid"} color={"primary"}>
              PRIMARY (DEFAULT)
            </Button>
            <Button variant={"outlined"} color={"success"}>
              SUCCESS
            </Button>
            <Button variant={"text"} color={"error"}>
              ERROR
            </Button>
          </div>
        </div>
        <div>
          <h6>WITH TOOLTIP</h6>
          <div className="flex gap-1 mt-1">
            <Button tooltip="Hello">HOVER ME (TOP DEFAULT)</Button>
            <Button tooltip="Hello" tooltipPosition="left">
              HOVER ME (LEFT)
            </Button>
            <Button tooltip="Hello" tooltipPosition="right">
              HOVER ME (RIGHT)
            </Button>
            <Button tooltip="Hello" tooltipPosition="bottom">
              HOVER ME (BOTTOM)
            </Button>
          </div>
        </div>
        <div>
          <h6>WITH ICONS</h6>
          <div className="flex gap-1 mt-1">
            <Button icon={<Icon icon={"ion:save"} />} iconPosition="left">
              LEFT
            </Button>
            <Button icon={<Icon icon={"ion:save"} />} iconPosition="right">
              RIGHT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
