export interface StateToProps {
  scene: () => JSX.Element;
}

export interface DispatchToProps {
  setScene: (scene: () => JSX.Element) => void;
}

export interface Props extends React.Component {
  scene: () => JSX.Element;
  setScene: (scene: () => JSX.Element) => void;
}
