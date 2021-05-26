import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component{
    state={term: ''};
    onSubmitForm=(event)=>{
        event.preventDefault();

        console.log(this.state.term);

        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSubmitForm}>
                    <div className='field'>
                        <label>Search Video</label>
                        <input type='text' placeholder='Enter text' value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;