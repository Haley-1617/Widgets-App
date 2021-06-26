// children is a special variable, it will take an inner components of Route
const Route = ({path, children}) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
