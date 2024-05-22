import React, { forwardRef, useEffect } from 'react';
const PageNation = forwardRef(({ children, setScrollPosition }, ref) => {
  return (
    <div ref={ref} className='page'>
      {children}
    </div>
  );
});
export default PageNation;

