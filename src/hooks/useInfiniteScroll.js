import React, { useRef, useState } from 'react';

const options = {
  root: null,
  rootMargin: '100px 0px',
  threshold: 0,
};

const DEFAULT_SHOW_NUM = 15;

const useInfiniteScroll = () => {
  const [showNum, setShowNum] = useState(DEFAULT_SHOW_NUM);
  const targetRef = useRef(null);

  const onIntersection = ([entry], _observer) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        setShowNum((pre) => pre + 10);
      }, 200);
    }
  };

  const initShowNum = () => {
    window.scrollTo({ top: 0 });
    setShowNum(DEFAULT_SHOW_NUM);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return { targetRef, initShowNum, showNum };
};

export default useInfiniteScroll;
