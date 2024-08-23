import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import Circle from '@mui/icons-material/Circle';
import Badge from '@mui/material/Badge';
import { Card, Stack } from 'react-bootstrap';


interface ExamDatesResponse {
    examDates: string[];
}

function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <Badge
            key={day.toString()}
            overlap="circular"
            variant={ isSelected? "dot": undefined}
            color="error"
        >
            <PickersDay
                {...other}
                outsideCurrentMonth={outsideCurrentMonth}
                day={day}
                sx={{
                    '&.MuiPickersDay-root': {
                        backgroundColor: isSelected ? '#006c69' : '#fff',
                        borderColor: '#006c69',
                        color: isSelected ? '#fff' : 'rgba(0, 0, 0, 0.87)',
                        '&.Mui-selected': {
                            backgroundColor: '#006c69',
                            color: '#fff',
                            borderColor: '#006c69',
                            ':hover': {
                                backgroundColor: '#005c61',
                                borderColor: '#005c61',
                            },
                        }
                    },
                }}
            />
        </Badge>
    );
}


const DateCalendarServerRequest = () => {
    const requestAbortController = React.useRef<AbortController | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

    const handleFetchExamDates = async (date: Dayjs) => {
        const controller = new AbortController();
        try {
            const examDates = [
                '2024-08-03',
                '2024-08-15',
                '2024-08-20',
                '2024-08-25',
                '2024-08-30'
            ];

            setHighlightedDays(examDates.map(dateStr => dayjs(dateStr).date()));
            setIsLoading(false);
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                console.error('Failed to fetch exam dates:', error);
            }
        }
        requestAbortController.current = controller;
    };

    React.useEffect(() => {
        const currentDate = dayjs();
        handleFetchExamDates(currentDate);
        return () => requestAbortController.current?.abort();
    }, []);

    const handleMonthChange = (date: Dayjs) => {
        if (requestAbortController.current) {
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        handleFetchExamDates(date);
    };


    return (
        <Card className="card-calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    readOnly
                    loading={isLoading}
                    onMonthChange={handleMonthChange}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{
                        day: ServerDay,
                    }}
                    slotProps={{
                        day: {
                            sx: {
                                "&.MuiPickersDay-root.Mui-selected": {
                                    backgroundColor: '#006c69',
                                },
                                ['&[data-mui-date="true"] .Mui-selected']: {
                                    backgroundColor: '#006c69',
                                },
                                ':not(.Mui-selected)': {
                                    backgroundColor: '#fff',
                                    borderColor: '#006c69',
                                },
                                '&.Mui-selected': {
                                    color: '#fff',
                                    backgroundColor: '#006c69',
                                    borderColor: '#006c69',
                                    ':hover': {
                                        color: '#fff',
                                        backgroundColor: '#006c69',
                                        borderColor: '#006c69',
                                    },
                                },
                                ':hover': {
                                    color: '#fff',
                                    backgroundColor: '#006c69',
                                    borderColor: '#006c69',
                                },
                            },
                            highlightedDays,
                        } as any,
                    }}
                />
            </LocalizationProvider>

            <hr style={{ marginTop: '0px', borderTop: '1px solid #CED4DA' }} />
            <Stack direction="horizontal" gap={3} className="justify-content-center align-items-center text-primary">
                <div className="mb-2">
                    <Brightness1OutlinedIcon />
                    <span>Today</span>
                </div>
                <div className="mb-2">
                    <Circle />
                    <span>Exam day</span>
                </div>
            </Stack>
        </Card>
    );
};

export default DateCalendarServerRequest;
