import React, { Component } from 'react';
class Content extends Component {
    state = {  }
    render() { 
        return ( <div id="content" className="content ">

        <div className="container-fluid">
            <div className="row my-5">
                <div className="col-md-3 col-xl-3">
                    <div className="card bg-c-blue text-white">
                        <div className="card-block">
                            <h6 className="m-b-20">A sub heading</h6>
                            <p className="m-b-0">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-xl-3">
                    <div className="card bg-c-green text-white">
                        <div className="card-block">
                            <h6 className="m-b-20">A sub heading</h6>
                            <p className="m-b-0">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-xl-3">
                    <div className="card bg-c-yellow text-white">
                        <div className="card-block">
                            <h6 className="m-b-20">A sub heading</h6>
                            <p className="m-b-0">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-xl-3">
                    <div className="card bg-c-pink text-white">
                        <div className="card-block">
                            <h6 className="m-b-20">A sub heading</h6>
                            <p className="m-b-0">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-6 ">
                    <div className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur massa eget
                            suscipit vehicula. Cras tincidunt semper nisl et placerat. Curabitur at malesuada dolor.
                            Nulla dapibus libero sit amet ex molestie tempus. Sed placerat purus id viverra sagittis. Ut
                            sagittis porta lorem id tincidunt. Suspendisse tempus nulla eget scelerisque interdum. Nulla
                            eu ex eros. Nam at enim vitae dui facilisis aliquet. Vivamus ultricies est quis lectus
                            consequat, feugiat fringilla neque fermentum. Integer aliquam rhoncus odio, ut eleifend elit
                            venenatis eu. Etiam eget justo ornare, vestibulum elit eu, egestas justo. Vestibulum vitae
                            consequat mauris. Duis eu finibus ex.
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-xl-6 ">
                    <div className="card">
                        <div className="card-body">
                            Vestibulum ac sem vel nisl blandit blandit et molestie lectus. Integer ac sem turpis. Nulla
                            leo sapien, ultricies ut nulla at, placerat tempus ex. Sed viverra dignissim vestibulum.
                            Suspendisse lacinia quam ante, ac iaculis ipsum euismod commodo. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum semper sapien
                            id faucibus. Nam bibendum condimentum finibus. Etiam blandit ultrices orci vitae consequat.
                            Phasellus nibh purus, viverra ac ligula id, blandit finibus orci. Maecenas cursus arcu a
                            tincidunt iaculis. Nulla nec feugiat risus. Morbi at lacus lorem. Cras consectetur urna nec
                            tellus porta mollis. Nunc a euismod erat. Maecenas consectetur rutrum nibh.
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-xl-3 ">
                    <div className="card bg-c-task">
                        <div className="card-title pl-2 m-2">
                            <b>tasks</b>
                        </div>
                        <div className="card-body">
                            <input type="checkbox" id="cboxone" /> <label htmlFor="cboxone">task one</label>
                            <hr />
                            <input type="checkbox" id="cboxtwo" /> <label htmlFor="cboxtwo">task two</label>
                            <hr />
                            <input type="checkbox" id="cboxthree" /> <label htmlFor="cboxthree">task three</label>


                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-xl-3 ">


                  
                    <div className="card bg-primary ">
                        <div className="card-body text-center">
                            <p className="card-text">Pellentesque purus magna, elementum et sagittis pulvinar, efficitur
                                quis justo. Mauris congue ornare sollicitudin. Aenean lacinia auctor ipsum, eget
                                condimentum elit fermentum eget. Quisque egestas libero a luctus imperdiet. Proin
                                commodo ante risus, non mollis justo cursus eget. Nam maximus rutrum elit, nec cursus
                                ipsum interdum id. Nunc eget lobortis nisl, eu gravida massa.

                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-xl-3 ">

                    <div className="card bg-warning">
                        <div className="card-body text-center">
                            <p className="card-text">In non est eget est porta imperdiet non nec est. Praesent cursus arcu
                                id quam malesuada feugiat. Aliquam erat volutpat. Praesent sed turpis et libero
                                ultricies dignissim at et libero. Nunc ultrices, sapien sit amet molestie iaculis, elit
                                risus aliquam lacus</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xl-3 ">

                    <div className="card bg-success">
                        <div className="card-body text-center">
                            <p className="card-text">et finibus sem leo quis sem. Maecenas dictum blandit magna, ac maximus
                                lectus semper in. Praesent eros sem, sagittis nec massa quis, tristique sollicitudin
                                lorem. Nunc suscipit libero ac ipsum euismod aliquam. Duis congue aliquet eleifend.

                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div> );
    }
}
 
export default Content;