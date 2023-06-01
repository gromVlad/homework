import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
      <Slider
        sx={{
          color: "#5E35B1",
          "& .MuiSlider-thumb": {
            backgroundColor: "#5E35B1",
          },
          "& .MuiSlider-valueLabel": {
            color: "#5E35B1",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#5E35B1",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#D1C4E9",
          },
        }}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
    );
}

export default SuperRange
