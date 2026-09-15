// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-successPopup',
  templateUrl: './successPopup.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class successPopupComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_WrTsNFZ8fOUL4e6Y(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_WrTsNFZ8fOUL4e6Y(bh) {
    try {
      bh = this.sd_l4Iz7FftTzVwi7mp(bh);
      //appendnew_next_sd_WrTsNFZ8fOUL4e6Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WrTsNFZ8fOUL4e6Y');
    }
  }

  sd_Xb3fiCdAILpqAZcz(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.closeDialog(bh);
      //appendnew_next_sd_Xb3fiCdAILpqAZcz
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xb3fiCdAILpqAZcz');
    }
  }
  //appendnew_flow_successPopupComponent_start

  sd_l4Iz7FftTzVwi7mp(bh) {
    try {
      this.page.claimResponse = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_w8r4QldBx6sK8kJx(bh);
      //appendnew_next_sd_l4Iz7FftTzVwi7mp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l4Iz7FftTzVwi7mp');
    }
  }

  sd_w8r4QldBx6sK8kJx(bh) {
    try {
      //appendnew_next_sd_w8r4QldBx6sK8kJx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w8r4QldBx6sK8kJx');
    }
  }

  closeDialog(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('true');

      //appendnew_next_closeDialog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7zg9vKB9nLpxC7st');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_successPopupComponent_Catch
}
