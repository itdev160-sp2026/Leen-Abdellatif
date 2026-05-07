# Activity 11 Reflection: React Tic-Tac-Toe

## Key Learnings

1. **Component-Based Architecture**

- React components make the code more organized and reusable.
- Each component has its own responsibility.
- Building the UI with components is easier to manage.

2. **State Management with useState**

- The useState hook makes state management simple.
- React automatically updates the UI when state changes.
- This is easier than manually updating the DOM in vanilla JavaScript.

3. **Props for Data Flow**

- Props allow passing data between components.
- Data flows from parent components to child components.
- Props help keep the application organized.

4. **Immutability**

- Using slice() creates a copy of arrays instead of changing them directly.
- Immutability helps React detect changes correctly.
- It also makes features like move history easier to implement.

---

## Comparison with Activity 10

| Aspect | Activity 10 (Vanilla JS) | Activity 11 (React) |
|---|---|---|
| State Updates | Manual DOM manipulation | Automatic re-rendering |
| Code Organization | Functions spread across the file | Organized into components |
| Adding Features | More difficult | Easier with React state |
| Reusability | Harder to reuse code | Components are reusable |
| Data Flow | Managed manually | Managed with props |
| UI Updates | Manual updates needed | React updates automatically |

---

## Challenges

1. Understanding how state is shared between components.
2. Learning JSX syntax and using className instead of class.
3. Understanding why immutability is important in React.

---

## What Worked Well

1. React components made the code easier to read.
2. The move history feature was simple to implement.
3. useState made handling the game state much easier.

---

## Next Steps

I want to learn more about:

1. useEffect hook
2. React Router
3. Custom Hooks
4. API integration with React
5. Advanced React concepts

---

## Conclusion

React makes building interactive applications easier compared to vanilla JavaScript. The component-based structure and automatic UI updates help create cleaner and more maintainable code.