import React, { useEffect, useState } from "react";

const useMedia = (media: string) => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    function changeMatch() {
      const { matches } = matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    addEventListener("resize", changeMatch);
    return () => {
      removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;