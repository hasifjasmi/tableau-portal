import { useRef, useEffect } from "react";
import { ImCross } from "@react-icons/all-files/fa/ImCross";

const { tableau } = window;

export default function Chart({ dashboard }) {
  const ref = useRef(null);

  useEffect(() => {
    const viz = new tableau.Viz(ref.current, `${dashboard}`, {
      hideToolbar: true,
      hideTabs: true,
      height: "800px",
      width: "650px",
    });

    // return viz; removing this seems to fix the problem lol.
  });

  return (
    <>
      <div className="border-2 border-red-700 bg-white">
        <div className="flex flex-row-reverse">
          <button className="btn btn-square align-items-right">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button className="btn btn-square">
            <i class="fa-solid fa-repeat"></i>
          </button>
          <a
            href="https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
            target="_blank"
          >
            <button className="btn btn-square">
              <i class="fa-solid fa-expand"></i>
            </button>
          </a>
        </div>
        <div ref={ref}></div>
      </div>
    </>
  );
}
