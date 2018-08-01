const galleryContainer = document.querySelector('.react-gallery');

let imgUrls = []; //decide on images later

//Component for gallery image

class GalleryImage extends React.Component {
  render() {
    return(
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} />

    )
  }
}

//Component for gallery modal

class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return(
      <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
        <div className='modal-body'>
          <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
          <img src={this.props.src} />
        </div>
      </div>
    )
  }
}

// Component for Gallery

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(url, e) {
    this.setState({
      showModal: true, 
      url: url
    })
  };

  closeModal() {
    this.setState({
      showModal: false, 
      url: ''
    })
  }

  render() {
    return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
          {
            imgUrls.map((url, index) => {
              return <div className='col-sm-6 col-md-3 col-xl-2'>
                <div className='gallery-card'>
                <GalleryImage className='gallery-thumbnail' src={url} alt={'image number ' + (index + 1)} />
                <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
              </div>
            </div>
            })
          }
        </div>
      </div>
    )
  }
}