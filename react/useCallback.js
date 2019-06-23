const useForm = () => {
  const [formState, setState] = useState({});
  const onChange = useCallback((event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }, [setState]);
  return [formState, onChange]
}

export default function Login() {
  const [values, onChange] = useForm();
  
  return (
   <form>
    <input
      type="email"
      name="email"
      value={values.email}
      onChange={onChange} />
    
    <input
      type="password"
      name="password"
      value={values.password}
      onChange={onChange} />
  ...