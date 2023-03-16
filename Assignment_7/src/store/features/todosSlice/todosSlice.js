import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todos = [];

const getTodoList = createAsyncThunk("todos/getTodoList", async () => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/abhiram-gopalakrishnan/f97271b889d3dcb3347fefbb79aefd1f/raw/e7b6c6472d8e9e2c85df4dc51b500f3bf5047464/todoList.json"
    );
    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    return error.message;
  }
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos,
    todosLength:0,
    loading: false,
    isSuccess: false,
  },
  reducers: {
    incrementId:(state,action)=>{
      state.todosLength+=1;
    },
    addTodo: (state, action) => {
      const [todoName,todoId]=action.payload;
      state.todos = [...state.todos, { id:todoId,name: todoName, complete: false}];
    },
    todoStatus: (state, action) => {
      const [todoId, status] = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.complete = status;
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      const [todoId, value] = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.name = value;
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state, action) => {
      // console.log("pending")
      state.loading = true;
    });
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.loading = false;
      // console.log("fulfilled",action.payload);
      state.todos = action.payload.todos;
      state.todosLength=action.payload.todos?.length;
      state.isSuccess = true;
    });
    builder.addCase(getTodoList.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const { addTodo, todoStatus, editTodo, deleteTodo,incrementId } = todosSlice.actions;
export default todosSlice;
export { getTodoList };
