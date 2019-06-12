import React from "react"

const Details = props => {
  return (

    <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>

  )
}

export default Details
