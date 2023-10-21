import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-transparent text-center text-black'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }} href='https://facebook.com/codelikeagirl91'>
            <MDBIcon fab icon='facebook-f' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }} href='https://twitter.com/dev_lindseyk'>
            <MDBIcon fab icon='twitter' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0082ca' }} href='https://linkedin.com/in/lindsey-howard'>
            <MDBIcon fab icon='linkedin-in' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#333333' }} href='https://github.com/codelikeagirl29'>
            <MDBIcon fab icon='github' size='lg' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

        <a className='text-primary' href='https://lindseyk.dev/'>
          © 2023 Copyright: Made with   <MDBIcon fas icon='heart' color='danger' /> by Lindsey
        </a>
      </div>
    </MDBFooter>
  );
}
