import React, { useState } from 'react'
import { forwardRef } from 'react'

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleErr = () => {
        setFallback('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019');
    }
    return (
        <img ref={ref} {...props} alt={alt} src={fallback || src}
            onError={handleErr}
        />
    )
});

export default Image;
