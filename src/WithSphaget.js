export function WithSphaget(
  Component,
  handlers,
  { useStateDefinitions, useEffectDefinitons } = {}
) {
  const ModifiedComponent = ({ ...props }) => {
    const states = useStateDefinitions && useStateDefinitions();

    useEffectDefinitons && useEffectDefinitons(states);

    const modifiedHandlers = {};
    Object.keys(handlers).forEach((handlerKey) => {
      const func = handlers[handlerKey];
      modifiedHandlers[handlerKey] = func.bind(states);
    });
    return <Component {...modifiedHandlers} state={states} {...props} />;
  };
  return ModifiedComponent;
}
