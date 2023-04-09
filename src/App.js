import { Upload, Button } from 'antd';
// import "antd/dist/antd.css"



const App = () => {
  return (
    <div 
     style={{
      display: "flex",
      justifyContent: "center",
      alignIteams: "center",
      height: "300px",
      width:"200px",
      margin: "150px"
     }}
     >
      <Upload.Dragger multiple
      listType= "picture"
       action={'http://localhost:3000/'}
       showUploadList={{ showRemoveIcon: false,
      showUploadList:false }}
      accept=".png,.jpeg,.doc"
      beforeUpload={(file) => {
        if (file.size >= 5000) alert('low size upload plz')
        // console.log( { file } );
        return false;
      }}
       >
        Drag files here OR
        <br />
       <Button>Click Upload</Button>
      </Upload.Dragger>
      
    </div>
  )
}

export default App
