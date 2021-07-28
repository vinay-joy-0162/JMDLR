import React from 'react';
// import axios from 'axios';

// import all required pdfs
import constitutional from '../../pdfs/constitutional.pdf';

// template
// import pdfname from 'path';

class PDFViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // loading : true,
            file : props.match.params.file
        };
    }

    // fetch pdf from server
    // componentDidMount(){
    //     // console.log(this.state.file)
    //     axios.get('/file/' + this.state.file)
    //     .then(res => {
    //         if(res.data.success){
    //             // console.log(res.data.base64data);
    //             this.setState({ base64Data : res.data.base64data });
    //         }else{
    //             alert('Something went wrong');
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    render(){
        let filename;

        if(this.state.file === 'constitutional'){
            filename = constitutional;
        }
        return (
           <div className="container">

            {
                this.state.file === 'constitutional' 
                ?
                    <iframe 
                    src={constitutional}
                    style={{height:'100vh'}} 
                    height="100%" 
                    width="100%" 
                    title = 'x1' 
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                />
                :
                    this.state.file === 'test'
                    ?
                        <iframe 
                        src={"importent file name"}
                        style={{height:'100vh'}} 
                        height="100%" 
                        width="100%" 
                        title = 'x1' 
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        />
                    :
                        <div>tyest</div>
                
            }
             
        </div>
        );
        
    }
};

export default PDFViewer;

