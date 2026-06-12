const getEmployee = () =>new Promise((resolve) =>
    setTimeout(() => resolve({
          id: 1,
          name: "Sudhan",
          role: "Trainer",
        }),
      2000
    )
  );

getEmployee().then((employee) => console.log(employee));