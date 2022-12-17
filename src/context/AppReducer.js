export default (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return {
      	...state,
          employees: [action.payload, ...state.employees]
      }
      case 'UPDATE_EMPLOYEE':
        const updateEmployee = action.payload;
  
        const updateEmployees = state.employees.map(employee => {
          if (employee._id === employee._id) {
            return updateEmployee;
          }
          return employee;
        })
        return {
          ...state,
          employees: updateEmployees
        }
  
      case 'DELETE_EMPLOYEE':
        return {
          ...state,
          employees: state.employees.filter(employee => {
            return employee._id !== action.payload;
          })
        }
      default:
        return state;
    }
  }