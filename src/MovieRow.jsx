import React from 'react'

class MovieRow extends React.Component{
    render(){
        return<div>
{console.log(this.props.movie.poster_src)}
        <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
             <img className="br4 {        border-radius: 1rem; } grow "alt='poster' width="100" height="100" src={`${this.props.movie.poster_src}`}/>
             </td>
             <td>
             <h2>{this.props.movie.title}</h2>
             <p className="measure-wide {   max-width: 34em; }  " width="50%">{this.props.movie.overview}</p>
             </td>
          </tr>   
        </tbody>
      </table>  
    </div>  
    }
}
export default MovieRow;