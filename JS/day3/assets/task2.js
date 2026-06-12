const attendanceCounting = () => {
    
    let attendance = 0;

    return () => {
        attendance++;
        console.log(`Current Attendance count is: ${attendance}`);
    };
};

const markAttendance = attendanceCounting();
markAttendance();
markAttendance();
markAttendance();