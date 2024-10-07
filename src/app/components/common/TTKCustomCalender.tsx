// app/components/common/TTKCustomCalender.tsx

import * as React from 'react';
import { 
  LocalizationProvider, 
  DateCalendar, 
  PickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface TTKCustomCalenderProps {
  selectedDates: Date[];
  onDateChange: (dates: Date[]) => void;
}

const TTKCustomCalender: React.FC<TTKCustomCalenderProps> = ({ selectedDates, onDateChange }) => {
  const [value, setValue] = React.useState<dayjs.Dayjs | null>(selectedDates.length > 0 ? dayjs(selectedDates[0]) : null); 

  const handleDayChange = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue);
    // Update selectedDates in parent when value changes
    if (newValue === null) {
      onDateChange([]);
    } else {
      onDateChange([newValue.toDate()]);
    }
  };

  // Function to render custom day component
  const renderDay = (
    date: dayjs.Dayjs, 
    selectedDates: dayjs.Dayjs[], 
    pickersDayProps: PickersDayProps<dayjs.Dayjs> 
  ) => {
    return (
      <PickersDay 
        {...pickersDayProps} 
        sx={{
          '&.Mui-selected': {
            backgroundColor: 'primary.main', 
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark', 
            },
          },
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          value={value}
          onChange={handleDayChange}
        //   renderDay={renderDay} 
        />
    </LocalizationProvider>
  );
};

export default TTKCustomCalender;