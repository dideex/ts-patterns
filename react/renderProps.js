/**
 * HOC
 */
import { message } from 'antd';

const Button = (props) => <button {...props} />;

const withMessage = (WrappedComponent) => (
  ({ messageType, messageText, ...restProps }) => (
    <WrappedComponent {...restProps} onClick={() => message[messageType](messageText)} />
  )
);

const ButtonWithMessage = withMessage(Button);

<ButtonWithMessage messageType="success" messageText="Hello!">Say hello</ButtonWithMessage>

/**
 * Render props
 */
import { message } from 'antd';

const Button = (props) => <button {...props} />;

const MessageProvider = ({ type, text, children }) => children({ showMessage: () => message[type](text) });

<MessageProvider type="success" text="hello">
  {({ showMessage}) => (
    <Button onClick={showMessage}>Say hello</Button>
  )}
</MessageProvider>


// __________________________________________

const Log = ({ children, ...props }) => {
  console.log({props})
  return children(props)
}

const Multiply = ({ children, multiplier, value, ...props }) => {
  return children({ ...props, count: value * multiplier })
}

const Compose = ({ count, ...props }) => (
  <Multiply multiplier={2} value={count} {...props}>
    {(props) => (
      <Log {...props}>
        {(props) => (<Counter {...props}/>)}
      </Log>
    )}
  </Multiply>
)