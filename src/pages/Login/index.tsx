import { Container, ContainerContent, ContainerLeft, ContainerRight, Header, Body, Footer} from "./style"

// import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import FormProvider from 'src/components/hook-form/form-provider';

import imgLogin from "../../assets/img/imgLogin.svg"


  // const NewModuleSchema = Yup.object().shape({
  //   name: Yup.string().required('Título é obrigatório'),
  //   description: Yup.string().required('Descrição é obrigatória'),
  //   workload: Yup.number().required('Carga horária é obrigatória'),
  //   courseId:Yup.mixed()
  //   .oneOf(courselist.map((course) => course.value))
  //   .required('Curso é obrigatório'),
  // });
  
  // const methods = useForm({
  //   resolver: yupResolver(NewModuleSchema),
  //   defaultValues: {
  //     name: '',
  //     description: '',
  //     workload: 0,
  //     courseId: '',
  //   },
  // });

  // const {
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;


export default function Login() {
  return (
    <Container>
      {/* <FormProvider> */}
        <ContainerLeft>
    <ContainerContent>
      <Header>
            Login
      </Header>
      <Body></Body>
      <Footer></Footer>
    </ContainerContent>
        </ContainerLeft>
        <ContainerRight>
          <img src={imgLogin} alt="" />
        </ContainerRight>
      {/* </FormProvider> */}
  </Container>
)
}
