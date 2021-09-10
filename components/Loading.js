import { WanderingCubes } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          height={200}
          style={{ marginBottom: "10px" }}
          src="https://www.searchpng.com/wp-content/uploads/2019/03/Messenger-Icon-PNG-715x715.png"
          alt=""
        />
        <WanderingCubes size={50} cubeSize={12} color="skyblue" />
      </div>
    </center>
  );
}

export default Loading;
