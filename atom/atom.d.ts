// Type definitions for Atom
// Project: https://atom.io/
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../space-pen/space-pen.d.ts" />
/// <reference path="../emissary/emissary.d.ts" />

// Policy: this definition file only declare element related to `atom`.
// if js file include to another npm package (e.g. "space-pen", "mixto" and "emissary").
// you should create a separate file.

// NOTE Document? You should use DevTools hehe...

interface Window {
	atom: AtomCore.IAtom;
	measure(description:string, fn:Function):any; // return fn result
	profile(description:string, fn:Function):any; // return fn result
}

declare module AtomCore {

// https://atom.io/docs/v0.84.0/advanced/view-system
	interface IWorkspaceView {
		prependToBottom:any;
		prependToTop:any;
		prependToLeft:any;
		prependToRight:any;
		appendToBottom:any;
		appendToTop:any;
		appendToLeft:any;
		appendToRight:any;

		command: Function;
	}

	interface IPanes {
		// TBD
	}

	interface ITreeView {
		// TBD
	}

	interface ICommandPanel {
		// TBD
	}

	interface ITextBuffer {
		// TBD
	}

	interface IDisplayBuffer {
		buffer: ITextBuffer;
		// TBD
	}

	interface ICursor {
		// TBD
	}

	interface ILanguageMode {
		// TBD
	}

	interface ISelection /* extends Theorist.Model */ {
		cursor:ICursor;
		marker:IDisplayBufferMarker;
		editor:IEditor;
		initialScreenRange:any;
		wordwise:boolean;
		needsAutoscroll:boolean;
		retainSelection:boolean;
		subscriptionCounts:any;

		destroy():any;
		finalize():any;
		clearAutoscroll():any;
		isEmpty():boolean;
		isReversed():boolean;
		isSingleScreenLine():boolean;
		getScreenRange():IRange;
		setScreenRange(screenRange:any, options:any):any;
		getBufferRange():IRange;
		setBufferRange(bufferRange:any, options:any):any;
		getBufferRowRange():number[];
		autoscroll():void;
		getText():string;
		clear():boolean;
		selectWord():IRange;
		expandOverWord():any;
		selectLine(row?:any):IRange;
		expandOverLine():boolean;
		selectToScreenPosition(position:any):any;
		selectToBufferPosition(position:any):any;
		selectRight():boolean;
		selectLeft():boolean;
		selectUp(rowCount?:any):boolean;
		selectDown(rowCount?:any):boolean;
		selectToTop():any;
		selectToBottom():any;
		selectAll():any;
		selectToBeginningOfLine():any;
		selectToFirstCharacterOfLine():any;
		selectToEndOfLine():any;
		selectToBeginningOfWord():any;
		selectToEndOfWord():any;
		selectToBeginningOfNextWord():any;
		selectToPreviousWordBoundary():any;
		selectToNextWordBoundary():any;
		addSelectionBelow():any;
		getGoalBufferRange():any;
		addSelectionAbove():any[];
		insertText(text:string, options?:any):any;
		normalizeIndents(text:string, indentBasis:number):any;
		indent(_arg?:any):any;
		indentSelectedRows():IRange[];
		setIndentationForLine(line:string, indentLevel:number):any;
		backspace():any;
		backspaceToBeginningOfWord():any;
		backspaceToBeginningOfLine():any;
		delete():any;
		deleteToEndOfWord():any;
		deleteSelectedText():any;
		deleteLine():any;
		joinLines():any;
		outdentSelectedRows():any[];
		autoIndentSelectedRows():any;
		toggleLineComments():any;
		cutToEndOfLine(maintainClipboard:any):any;
		cut(maintainClipboard:any):any;
		copy(maintainClipboard:any):any;
		fold():any;
		modifySelection(fn:()=>any):any;
		plantTail():any;
		intersectsBufferRange(bufferRange:any):any;
		intersectsWith(otherSelection:any):any;
		merge(otherSelection:any, options:any):any;
		compare(otherSelection:any):any;
		getRegionRects():any[];
		screenRangeChanged():any;
	}

	interface ISubscription {
		// TBD
	}

	interface IEditor {
		// Serializable.includeInto(Editor);
		// Delegator.includeInto(Editor);

		deserializing:boolean;
		callDisplayBufferCreatedHook:boolean;
		registerEditor:boolean;
		buffer:ITextBuffer;
		languageMode: ILanguageMode;
		cursors:ICursor[];
		selections: ISelection[];
		suppressSelectionMerging:boolean;
		softTabs: boolean;
		displayBuffer: IDisplayBuffer;

		id:number;
		behaviors:any;
		declaredPropertyValues: any;
		eventHandlersByEventName: any;
		eventHandlersByNamespace: any;
		lastOpened: number;
		subscriptionCounts: any;
		subscriptionsByObject: any; /* WeakMap */
		subscriptions: ISubscription[];

		serializeParams():{id:number; softTabs:boolean; scrollTop:number; scrollLeft:number; displayBuffer:any;};
		deserializeParams(params:any):any;
		subscribeToBuffer():void;
		subscribeToDisplayBuffer():void;
		getViewClass():any; // return type are EditorView
		destroyed():void;
		copy():IEditor;
		getTitle():string;
		getLongTitle():string;
		setVisible(visible:boolean):void;
		setScrollTop(scrollTop:any):void;
		getScrollTop():number;
		setScrollLeft(scrollLeft:any):void;
		getScrollLeft():number;
		setEditorWidthInChars(editorWidthInChars:any):void;
		getSoftWrapColumn():number;
		getSoftTabs():boolean;
		setSoftTabs(softTabs:boolean):void;
		getSoftWrap():boolean;
		setSoftWrap(softWrap:any):void;
		getTabText():string;
		getTabLength():number;
		setTabLength(tabLength:any):void;
		clipBufferPosition(bufferPosition:any):void;
		clipBufferRange(range:any):void;
		indentationForBufferRow(bufferRow:any):void;
		setIndentationForBufferRow(bufferRow:any, newLevel:any, _arg:any):void;
		indentLevelForLine(line:any):number;
		buildIndentString(number:any):string;
		save():void;
		saveAs(filePath:any):void;
		getPath():string;
		getText():string;
		setText(text:any):void;
		getTextInRange(range:any):any;
		getLineCount():number;
		getBuffer():ITextBuffer;
		getUri():string;
		isBufferRowBlank(bufferRow:any):boolean;
		isBufferRowCommented(bufferRow:any):void;
		nextNonBlankBufferRow(bufferRow:any):void;
		getEofBufferPosition():IPoint;
		getLastBufferRow():number;
		bufferRangeForBufferRow(row:any, options:any):IRange;
		lineForBufferRow(row:number):string;
		lineLengthForBufferRow(row:number):number;
		scan():any;
		scanInBufferRange():any;
		backwardsScanInBufferRange():any;
		isModified():boolean;
		shouldPromptToSave():boolean;
		screenPositionForBufferPosition(bufferPosition:any, options?:any):IPoint;
		bufferPositionForScreenPosition(screenPosition:any, options?:any):IPoint;
		screenRangeForBufferRange(bufferRange:any):IRange;
		bufferRangeForScreenRange(screenRange:any):IRange;
		clipScreenPosition(screenPosition:any, options:any):IRange;
		lineForScreenRow(row:any):ITokenizedLine;
		linesForScreenRows(start?:any, end?:any):ITokenizedLine[];
		getScreenLineCount():number;
		getMaxScreenLineLength():number;
		getLastScreenRow():number;
		bufferRowsForScreenRows(startRow:any, endRow:any):any[];
		bufferRowForScreenRow(row:any):number;
		scopesForBufferPosition(bufferPosition:any):string[];
		bufferRangeForScopeAtCursor(selector:string):any;
		tokenForBufferPosition(bufferPosition:any):IToken;
		getCursorScopes():string[];
		insertText(text:string, options?:any):IRange[];
		insertNewline():IRange[];
		insertNewlineBelow():IRange[];
		insertNewlineAbove():any;
		indent(options?:any):any;
		backspace():any[];
		backspaceToBeginningOfWord():any[];
		backspaceToBeginningOfLine():any[];
		delete():any[];
		deleteToEndOfWord():any[];
		deleteLine():IRange[];
		indentSelectedRows():IRange[][];
		outdentSelectedRows():IRange[][];
		toggleLineCommentsInSelection():IRange[];
		autoIndentSelectedRows():IRange[][];
		normalizeTabsInBufferRange(bufferRange:any):any;
		cutToEndOfLine():boolean[];
		cutSelectedText():boolean[];
		copySelectedText():boolean[];
		pasteText(options?:any):IRange[];
		undo():any[];
		redo():any[];
		foldCurrentRow():any;
		unfoldCurrentRow():any[];
		foldSelectedLines():any[];
		foldAll():any[];
		unfoldAll():any[];
		foldAllAtIndentLevel(level:any):any;
		foldBufferRow(bufferRow:any):any;
		unfoldBufferRow(bufferRow:any):any;
		isFoldableAtBufferRow(bufferRow:any):boolean;
		createFold(startRow:any, endRow:any):IFold;
		destroyFoldWithId(id:any):any;
		destroyFoldsIntersectingBufferRange(bufferRange:any):any;
		toggleFoldAtBufferRow(bufferRow:any):any;
		isFoldedAtCursorRow():boolean;
		isFoldedAtBufferRow(bufferRow:any):boolean;
		isFoldedAtScreenRow(screenRow:any):boolean;
		largestFoldContainingBufferRow(bufferRow:any):boolean;
		largestFoldStartingAtScreenRow(screenRow:any):any;
		outermostFoldsInBufferRowRange(startRow:any, endRow:any):any[];
		moveLineUp():ISelection[];
		moveLineDown():ISelection[];
		duplicateLines():any[][];
		duplicateLine():any[][];
		mutateSelectedText(fn:(selection:ISelection)=>any):any;
		replaceSelectedText(options:any, fn:(selection:string)=>any):any;
		getMarker(id:number):IDisplayBufferMarker;
		getMarkers():IDisplayBufferMarker[];
		findMarkers(properties:any):IDisplayBufferMarker[];
		markScreenRange(value:number):IDisplayBufferMarker;
		markBufferRange(value:number):IDisplayBufferMarker;
		markScreenPosition(value:number):IDisplayBufferMarker;
		markBufferPosition():IDisplayBufferMarker;
		destroyMarker():boolean;
		getMarkerCount():number;
		hasMultipleCursors():boolean;
		getCursors():ICursor[];
		getCursor():ICursor;
		addCursorAtScreenPosition(screenPosition:any):ICursor;
		addCursorAtBufferPosition(bufferPosition:any):ICursor;
		addCursor(marker:any):ICursor;
		removeCursor(cursor:any):ICursor[];
		addSelection(marker:any, options:any):ISelection;
		addSelectionForBufferRange(bufferRange:any, options:any):ISelection;
		setSelectedBufferRange(bufferRange:any, options:any):any;
		setSelectedBufferRanges(bufferRanges:any, options:any):any;
		removeSelection(selection:ISelection):any;
		clearSelections():boolean;
		consolidateSelections():boolean;
		getSelections():ISelection[];
		getSelection(index?:number):ISelection;
		getLastSelection():ISelection;
		getSelectionsOrderedByBufferPosition():ISelection[];
		getLastSelectionInBuffer():ISelection;
		selectionIntersectsBufferRange(bufferRange:any):any;
		setCursorScreenPosition(position:any, options:any):any;
		getCursorScreenPosition():IPoint;
		getCursorScreenRow():number;
		setCursorBufferPosition(position:any, options:any):any;
		getCursorBufferPosition():IPoint;
		getSelectedScreenRange():IRange;
		getSelectedBufferRange():IRange;
		getSelectedBufferRanges():IRange[];
		getSelectedText():string;
		getTextInBufferRange(range:IRange):string;
		setTextInBufferRange(range:IRange, text:string):any;
		getCurrentParagraphBufferRange():IRange;
		getWordUnderCursor(options?:any):string;
		moveCursorUp(lineCount?:number):void;
		moveCursorDown(lineCount?:number):void;
		moveCursorLeft():void;
		moveCursorRight():void;
		moveCursorToTop():void;
		moveCursorToBottom():void;
		moveCursorToBeginningOfScreenLine():void;
		moveCursorToBeginningOfLine():void;
		moveCursorToFirstCharacterOfLine():void;
		moveCursorToEndOfScreenLine():void;
		moveCursorToEndOfLine():void;
		moveCursorToBeginningOfWord():void;
		moveCursorToEndOfWord():void;
		moveCursorToBeginningOfNextWord():void;
		moveCursorToPreviousWordBoundary():void;
		moveCursorToNextWordBoundary():void;
		moveCursors(fn:(cursor:ICursor)=>any):any;
		selectToScreenPosition(position:IPoint):any;
		selectRight():ISelection[];
		selectLeft():ISelection[];
		selectUp(rowCount?:number):ISelection[];
		selectDown(rowCount?:number):ISelection[];
		selectToTop():ISelection[];
		selectAll():ISelection[];
		selectToBottom():ISelection[];
		selectToBeginningOfLine():ISelection[];
		selectToFirstCharacterOfLine():ISelection[];
		selectToEndOfLine():ISelection[];
		selectToPreviousWordBoundary():ISelection[];
		selectToNextWordBoundary():ISelection[];
		selectLine():ISelection[];
		addSelectionBelow():ISelection[];
		addSelectionAbove():ISelection[];
		splitSelectionsIntoLines():any[];
		transpose():IRange[];
		upperCase():boolean[];
		lowerCase():boolean[];
		joinLines():any[];
		selectToBeginningOfWord():ISelection[];
		selectToEndOfWord():ISelection[];
		selectToBeginningOfNextWord():ISelection[];
		selectWord():ISelection[];
		selectMarker(marker:any):any;
		mergeCursors():number[];
		expandSelectionsForward():any;
		expandSelectionsBackward(fn:(selection:ISelection)=>any):ISelection[];
		finalizeSelections():boolean[];
		mergeIntersectingSelections():any;
		preserveCursorPositionOnBufferReload():ISubscription;
		getGrammar(): IGrammar;
		setGrammar(grammer:IGrammar):void;
		reloadGrammar():any;
		shouldAutoIndent():boolean;
		transact(fn:Function):any;
		beginTransaction():ITransaction;
		commitTransaction():any;
		abortTransaction():any[];
		inspect():string;
		logScreenLines(start:number, end:number):any[];
		handleGrammarChange():void;
		handleMarkerCreated(marker:any):any;
		getSelectionMarkerAttributes():{type: string; editorId: number; invalidate: string; };
		// joinLine():any; // deprecated
	}

	interface IGrammar {
		scopeName: string;
		// TBD
	}

	interface IPane /* extends Theorist.Model */ {
		items:any[];
		activeItem:any;

		serializeParams():any;
		deserializeParams(params:any):any;
		getViewClass():any; // return type are PaneView
		isActive():boolean;
		focus():void;
		blur():void;
		activate():void;
		getPanes():IPane[];
		getItems():any[];
		getActiveItem():any;
		getActiveEditor():any;
		itemAtIndex(index:number):any;
		activateNextItem():any;
		activatePreviousItem():any;
		getActiveItemIndex():number;
		activateItemAtIndex(index:number):any;
		activateItem(item:any):any;
		addItem(item:any, index:number):any;
		addItems(items:any[], index:number):any[];
		removeItem(item:any, destroying:any):void;
		moveItem(item:any, newIndex:number):void;
		moveItemToPane(item:any, pane:IPane, index:number):void;
		destroyActiveItem():boolean; // always return false
		destroyItem(item:any):boolean;
		destroyItems():any[];
		destroyInactiveItems():any[];
		destroy():void;
		destroyed():any[];
		promptToSaveItem(item:any):boolean;
		saveActiveItem():void;
		saveActiveItemAs():void;
		saveItem(item:any, nextAction:Function):void;
		saveItemAs(item:any, nextAction:Function):void;
		saveItems():any[];
		itemForUri(uri:any):any;
		activateItemForUri(uri:any):any;
		copyActiveItem():void;
		splitLeft(params:any):IPane;
		splitRight(params:any):IPane;
		splitUp(params:any):IPane;
		splitDown(params:any):IPane;
		split(orientation:string, side:string, params:any):IPane;
		findLeftmostSibling():IPane;
		findOrCreateRightmostSibling():IPane;
	}

// https://atom.io/docs/v0.84.0/advanced/serialization
	interface ISerializationStatic<T> {
		deserialize(data:ISerializationInfo):T;
		new (data:T): ISerialization;
	}

	interface ISerialization {
		serialize():ISerializationInfo;
	}

	interface ISerializationInfo {
		deserializer: string;
	}

	interface IBrowserWindow {
		getPosition():number[];
		getSize():number[];
	}

	interface IAtomWindowDimentions {
		x:number;
		y:number;
		width:number;
		height:number;
	}

	interface IProject {
		// TBD
	}

	interface IWorkspaceStatic {
		new():IWorkspace;
	}

	interface IWorkspace {
		deserializeParams(params:any):any;
		serializeParams():{paneContainer:any;fullScreen:boolean;};
		eachEditor(callback:Function):void;
		getEditors():IEditor[];
		open(uri:string, options:any):Q.Promise<View>;
		openLicense():void;
		openSync(uri:string, options:any):any;
		openUriInPane(uri:string, pane:any, options:any):Q.Promise<View>;
		reopenItemSync():any;
		registerOpener(opener:(urlToOpen:string)=>any):void;
		unregisterOpener(opener:Function):void;
		getOpeners():any;
		getActivePane(): IPane;
		getPanes():any;
		saveAll():void;
		activateNextPane():any;
		activatePreviousPane():any;
		paneForUri: (uri:string) => IPane;
		saveActivePaneItem():any;
		saveActivePaneItemAs():any;
		destroyActivePaneItem():any;
		destroyActivePane():any;
		getActiveEditor():IEditor;
		increaseFontSize():void;
		decreaseFontSize():void;
		resetFontSize():void;
		itemOpened(item:any):void;
		onPaneItemDestroyed(item:any):void;
		destroyed():void;
	}

	interface IAtomSettings {
		appVersion: string;
		bootstrapScript: string;
		devMode: boolean;
		initialPath: string;
		pathToOpen: string;
		resourcePath: string;
		shellLoadTime: number;
		windowState:string;
	}

	interface IAtomState {
		mode:string;
		packageStates:any;
		project:any;
		syntax:any;
		version:number;
		windowDimensions:any;
		workspace:any;
	}

	interface IDeserializerManager {
		deserializers:Function;
		add:Function;
		remove:Function;
		deserialize:Function;
		get:Function;
	}

	interface IConfig {
		get(keyPath:string):any;
		// TBD
	}

	interface IKeymapManager {
		defaultTarget:HTMLElement;
		// TBD
	}

	interface IPackageManager extends Emissary.IEmitter {
		packageDirPaths:string[];
		loadedPackages:any;
		activePackages:any;
		packageStates:any;
		packageActivators:any[];

		getApmPath():string;
		getPackageDirPaths():string;
		getPackageState(name:string):any;
		setPackageState(name:string, state:any):void;
		enablePackage(name:string):any;
		disablePackage(name:string):any;
		activate():void;
		registerPackageActivator(activator:any, types:any):void;
		activatePackages(packages:any):void;
		activatePackage(name:string):void;
		deactivatePackages():void;
		deactivatePackage(name:string):void;
		getActivePackages():any;
		getActivePackage(name:string):any;
		isPackageActive(name:string):boolean;
		unobserveDisabledPackages():void;
		observeDisabledPackages():void;
		loadPackages():void;
		loadPackage(nameOrPath:string):void;
		unloadPackages():void;
		unloadPackage(name:string):void;
		getLoadedPackage(name:string):any;
		isPackageLoaded(name:string):boolean;
		getLoadedPackages():any;
		getLoadedPackagesForTypes(types:any):any[];
		resolvePackagePath(name:string):string;
		isPackageDisabled(name:string):boolean;
		hasAtomEngine(packagePath:string):boolean;
		isBundledPackage(name:string):boolean;
		getPackageDependencies():any;
		getAvailablePackagePaths():any[];
		getAvailablePackageNames():any[];
		getAvailablePackageMetadata():any[];
	}

	interface IThemeManager {
		// TBD
	}

	interface IContextMenuManager {
		// TBD
	}

	interface IMenuManager {
		// TBD
	}

	interface IClipboard {
		// TBD
	}

	interface ISyntax {
		// TBD
	}

	interface IWindowEventHandler {
		// TBD
	}

	interface IAtomStatic extends ISerializationStatic<IAtom> {
		version: number;
		loadSettings: IAtomSettings;
		loadOrCreate(mode:string):IAtom;
		loadState(mode:any):void;
		getStatePath(mode:any):string;
		getConfigDirPath():string;
		getStorageDirPath():string;
		getLoadSettings():IAtomSettings;
		getCurrentWindow():IBrowserWindow;
		getVersion():string;
		isReleasedVersion():boolean;

		new(state:IAtomState):IAtom;
	}

	interface IAtom {
		constructor:IAtomStatic;

		state:IAtomState;
		mode:string;
		deserializers:IDeserializerManager;
		config: IConfig;
		keymaps: IKeymapManager;
		keymap: IKeymapManager;
		packages: IPackageManager;
		themes: IThemeManager;
		contextManu: IContextMenuManager;
		menu: IMenuManager;
		clipboard:IClipboard;
		syntax:ISyntax;
		windowEventHandler: IWindowEventHandler;

		// really exists? start
		subscribe:Function;
		unsubscribe:Function;
		loadTime:number;
		workspaceViewParentSelector:string;

		project: IProject;
		workspaceView: IWorkspaceView;
		workspace: IWorkspace;
		// really exists? end

		initialize:Function;
		// registerRepresentationClass:Function;
		// registerRepresentationClasses:Function;
		setBodyPlatformClass:Function;
		getCurrentWindow():IBrowserWindow;
		getWindowDimensions:Function;
		setWindowDimensions:Function;
		restoreWindowDimensions:Function;
		storeWindowDimensions:Function;
		getLoadSettings:Function;
		deserializeProject: Function;
		deserializeWorkspaceView:Function;
		deserializePackageStates:Function;
		deserializeEditorWindow:Function;
		startEditorWindow:Function;
		unloadEditorWindow:Function;
		loadThemes:Function;
		watchThemes:Function;
		open:Function;
		confirm:Function;
		showSaveDialog:Function;
		showSaveDialogSync:Function;
		openDevTools:Function;
		toggleDevTools:Function;
		executeJavaScriptInDevTools:Function;
		reload:Function;
		focus:Function;
		show:Function;
		hide:Function;
		setSize:Function;
		setPosition:Function;
		center:Function;
		displayWindow:Function;
		close:Function;
		exit:Function;
		inDevMode:Function;
		inSpecMode:Function;
		toggleFullScreen:Function;
		setFullScreen:Function;
		isFullScreen:Function;
		getVersion:Function;
		isReleasedVersion:Function;
		getGitHubAuthTokenName:Function;
		setGitHubAuthToken:Function;
		getGitHubAuthToken:Function;
		getConfigDirPath:Function;
		saveSync:Function;
		getWindowLoadTime():number;
		crashMainProcess:Function;
		crashRenderProcess:Function;
		beep:Function;
		getUserInitScriptPath:Function;
		requireUserInitScript:Function;
		requireWithGlobals:Function;
	}

	interface IBufferedNodeProcessStatic {
		new (arg:any):IBufferedNodeProcess;
	}

	interface IBufferedNodeProcess extends IBufferedProcess {
	}

	interface IBufferedProcessStatic {
		new (arg:any):IBufferedProcess;
	}

	interface IBufferedProcess {
		process:Function;
		killed:boolean;

		bufferStream:Function;
		kill:Function;
	}

	interface IGitStatic {
		new(path:any, options:any):IGit;
	}

	interface IGit {
	}

	interface IPointStatic {
		new (row?:number, column?:number):IPoint;

		fromObject(point:IPoint, copy?:boolean):IPoint;
		fromObject(object:number[]):IPoint;
		fromObject(object:{row:number; col:number;}):IPoint;

		min(point1:IPoint, point2:IPoint):IPoint;
		min(point1:number[], point2:IPoint):IPoint;
		min(point1:{row:number; col:number;}, point2:IPoint):IPoint;

		min(point1:IPoint, point2:number[]):IPoint;
		min(point1:number[], point2:number[]):IPoint;
		min(point1:{row:number; col:number;}, point2:number[]):IPoint;

		min(point1:IPoint, point2:{row:number; col:number;}):IPoint;
		min(point1:number[], point2:{row:number; col:number;}):IPoint;
		min(point1:{row:number; col:number;}, point2:{row:number; col:number;}):IPoint;
	}

	interface IPoint {
		constructor: IPointStatic;

		row:number;
		column:number;

		copy():IPoint;
		freeze():IPoint;

		translate(delta:IPoint):IPoint;
		translate(delta:number[]):IPoint;
		translate(delta:{row:number; col:number;}):IPoint;

		add(other:IPoint):IPoint;
		add(other:number[]):IPoint;
		add(other:{row:number; col:number;}):IPoint;

		splitAt(column:number):IPoint[];
		compare(other:IPoint):number;
		isEqual(other:IPoint):boolean;
		isLessThan(other:IPoint):boolean;
		isLessThanOrEqual(other:IPoint):boolean;
		isGreaterThan(other:IPoint):boolean;
		isGreaterThanOrEqual(other:IPoint):boolean;
		toArray():number[];
		serialize():number[];
	}

	interface IRangeStatic {
		deserialize(array:IPoint[]):IRange;

		fromObject(object:IPoint[]):IRange;

		fromObject(object:IRange, copy?:boolean):IRange;

		fromObject(object:{start: IPoint; end: IPoint}):IRange;
		fromObject(object:{start: number[]; end: IPoint}):IRange;
		fromObject(object:{start: {row:number; col:number;}; end: IPoint}):IRange;

		fromObject(object:{start: IPoint; end: number[]}):IRange;
		fromObject(object:{start: number[]; end: number[]}):IRange;
		fromObject(object:{start: {row:number; col:number;}; end: number[]}):IRange;

		fromObject(object:{start: IPoint; end: {row:number; col:number;}}):IRange;
		fromObject(object:{start: number[]; end: {row:number; col:number;}}):IRange;
		fromObject(object:{start: {row:number; col:number;}; end: {row:number; col:number;}}):IRange;

		fromText(point:IPoint, text:string):IRange;
		fromText(point:number[], text:string):IRange;
		fromText(point:{row:number; col:number;}, text:string):IRange;
		fromText(text:string):IRange;

		fromPointWithDelta(startPoint:IPoint, rowDelta:number, columnDelta:number):IRange;
		fromPointWithDelta(startPoint:number[], rowDelta:number, columnDelta:number):IRange;
		fromPointWithDelta(startPoint:{row:number; col:number;}, rowDelta:number, columnDelta:number):IRange;

		new(point1:IPoint, point2:IPoint):IRange;
		new(point1:number[], point2:IPoint):IRange;
		new(point1:{row:number; col:number;}, point2:IPoint):IRange;

		new(point1:IPoint, point2:number[]):IRange;
		new(point1:number[], point2:number[]):IRange;
		new(point1:{row:number; col:number;}, point2:number[]):IRange;

		new(point1:IPoint, point2:{row:number; col:number;}):IRange;
		new(point1:number[], point2:{row:number; col:number;}):IRange;
		new(point1:{row:number; col:number;}, point2:{row:number; col:number;}):IRange;
	}

	interface IRange {
		constructor:IRangeStatic;

		start: IPoint;
		end: IPoint;

		serialize():number[][];
		copy():IRange;
		freeze():IRange;
		isEqual(other:IRange):boolean;
		isEqual(other:IPoint[]):boolean;

		compare(object:IPoint[]):number;

		compare(object:{start: IPoint; end: IPoint}):number;
		compare(object:{start: number[]; end: IPoint}):number;
		compare(object:{start: {row:number; col:number;}; end: IPoint}):number;

		compare(object:{start: IPoint; end: number[]}):number;
		compare(object:{start: number[]; end: number[]}):number;
		compare(object:{start: {row:number; col:number;}; end: number[]}):number;

		compare(object:{start: IPoint; end: {row:number; col:number;}}):number;
		compare(object:{start: number[]; end: {row:number; col:number;}}):number;
		compare(object:{start: {row:number; col:number;}; end: {row:number; col:number;}}):number;

		isSingleLine():boolean;
		coversSameRows(other:IRange):boolean;

		add(object:IPoint[]):IRange;

		add(object:{start: IPoint; end: IPoint}):IRange;
		add(object:{start: number[]; end: IPoint}):IRange;
		add(object:{start: {row:number; col:number;}; end: IPoint}):IRange;

		add(object:{start: IPoint; end: number[]}):IRange;
		add(object:{start: number[]; end: number[]}):IRange;
		add(object:{start: {row:number; col:number;}; end: number[]}):IRange;

		add(object:{start: IPoint; end: {row:number; col:number;}}):IRange;
		add(object:{start: number[]; end: {row:number; col:number;}}):IRange;
		add(object:{start: {row:number; col:number;}; end: {row:number; col:number;}}):IRange;

		translate(startPoint:IPoint, endPoint:IPoint):IRange;
		translate(startPoint:IPoint):IRange;

		intersectsWith(otherRange:IRange):boolean;
		containsRange(otherRange:IRange, exclusive:boolean):boolean;

		containsPoint(point:IPoint, exclusive:boolean):boolean;
		containsPoint(point:number[], exclusive:boolean):boolean;
		containsPoint(point:{row:number; col:number;}, exclusive:boolean):boolean;

		intersectsRow(row:number):boolean;
		intersectsRowRange(startRow:number, endRow:number):boolean;
		union(otherRange:IRange):IRange;
		isEmpty():boolean;
		toDelta():IPoint;
		getRowCount():number;
		getRows():number[];
	}

	interface ITokenizedLine {
		// TBD
	}

	interface IToken {
		// TBD
	}

	interface IFold {
		// TBD
	}

	interface IDisplayBufferMarker {
		// TBD
	}

	interface ITransaction {
		// TBD
	}

	interface ITaskStatic {
		new(taskPath:any):ITask;
	}

	interface ITask {
		// TBD
	}
}

declare var atom:AtomCore.IAtom;

declare module "atom" {
	import spacePen = require("space-pen");

	var $:typeof spacePen.$;
	var $$$:typeof spacePen.$$$;

	var BufferedNodeProcess:AtomCore.IBufferedNodeProcessStatic;
	var BufferedProcess:AtomCore.IBufferedProcessStatic;
	var Git:AtomCore.IGitStatic;
	var Point:AtomCore.IPointStatic;
	var Range:AtomCore.IRangeStatic;

	class View extends spacePen.View implements Emissary.ISubscriber {
		// Subscriber.includeInto(spacePen.View);

		// inherit from Subscriber
		subscribeWith(eventEmitter:any, methodName:string, args:any):any;

		addSubscription(subscription:any):any;

		subscribe(eventEmitterOrSubscription:any, ...args:any[]):any;

		subscribeToCommand(eventEmitter:any, ...args:any[]):any;

		unsubscribe(object?:any):any;
	}

	class EditorView extends View {
		static characterWidthCache:any;
		static configDefaults:any;
		static nextEditorId:number;

		static content(params:any):void;

		static classes(_arg?:{mini?:any}):string;

		vScrollMargin:number;
		hScrollMargin:number;
		lineHeight:any;
		charWidth:any;
		charHeight:any;
		cursorViews:any[];
		selectionViews:any[];
		lineCache:any[];
		isFocused:any;
		editor:AtomCore.IEditor;
		attached:any;
		lineOverdraw:number;
		pendingChanges:any[];
		newCursors:any[];
		newSelections:any[];
		redrawOnReattach:any;
		bottomPaddingInLines:number;

		id:number;


		initialize(editorOrOptions:AtomCore.IEditor):void; // return type are same as editor method.
		initialize(editorOrOptions?:{editor: AtomCore.IEditor; mini:any; placeholderText:any}):void;

		initialize(editorOrOptions:{}):void; // compatible for spacePen.View

		bindKeys():void;

		getEditor():AtomCore.IEditor;

		getText():string;

		setText(text:string):void;

		insertText(text:string, options?:any):AtomCore.IRange[];

		setHeightInLines(heightInLines:number):number;

		setWidthInChars(widthInChars:number):number;

		pageDown():void;

		pageUp():void;

		getPageRows():number;

		setShowInvisibles(showInvisibles:boolean):void;

		setInvisibles(invisibles:{ eol:string; space: string; tab: string; cr: string; }):void;

		setShowIndentGuide(showIndentGuide:boolean):void;

		setPlaceholderText(placeholderText:string):void;

		getPlaceholderText():string;

		checkoutHead():boolean;

		configure():AtomCore.ISubscription;

		handleEvents():void;

		handleInputEvents():void;

		bringHiddenInputIntoView():JQuery;

		selectOnMousemoveUntilMouseup():any;

		afterAttach(onDom:any):any;

		edit(editor:AtomCore.IEditor):any;

		getModel():AtomCore.IEditor;

		setModel(editor:AtomCore.IEditor):any;

		showBufferConflictAlert(editor:AtomCore.IEditor):any;

		scrollTop(scrollTop:number, options?:any):any;

		scrollBottom(scrollBottom?:number):any;

		scrollLeft(scrollLeft?:number):number;

		scrollRight(scrollRight?:number):any;

		scrollToBottom():any;

		scrollToCursorPosition():any;

		scrollToBufferPosition(bufferPosition:any, options:any):any;

		scrollToScreenPosition(screenPosition:any, options:any):any;

		scrollToPixelPosition(pixelPosition:any, options:any):any;

		highlightFoldsContainingBufferRange(bufferRange:any):any;

		saveScrollPositionForEditor():any;

		toggleSoftTabs():any;

		toggleSoftWrap():any;

		calculateWidthInChars():number;

		calculateHeightInLines():number;

		getScrollbarWidth():number;

		setSoftWrap(softWrap:boolean):any;

		setFontSize(fontSize:number):any;

		getFontSize():number;

		setFontFamily(fontFamily?:string):any;

		getFontFamily():string;

		setLineHeight(lineHeight:number):any;

		redraw():any;

		splitLeft():any;

		splitRight():any;

		splitUp():any;

		splitDown():any;

		getPane():any; // return type are PaneView

		remove(selector:any, keepData:any):any;

		beforeRemove():any;

		getCursorView(index?:number):any; // return type are CursorView

		getCursorViews():any[]; // return type are CursorView[]

		addCursorView(cursor:any, options:any):any; // return type are CursorView

		removeCursorView(cursorView:any):any;

		getSelectionView(index?:number):any; // return type are SelectionView

		getSelectionViews():any[]; // return type are SelectionView[]

		addSelectionView(selection:any):any;

		removeSelectionView(selectionView:any):any;

		removeAllCursorAndSelectionViews():any[];

		appendToLinesView(view:any):any;

		scrollVertically(pixelPosition:any, _arg:any):any;

		scrollHorizontally(pixelPosition:any):any;

		calculateDimensions():number;

		recalculateDimensions():any;

		updateLayerDimensions():any;

		isHidden():boolean;

		clearRenderedLines():void;

		resetDisplay():any;

		requestDisplayUpdate():any;

		updateDisplay(options?:any):any;

		updateCursorViews():any;

		shouldUpdateCursor(cursorView:any):any;

		updateSelectionViews():any[];

		shouldUpdateSelection(selectionView:any):any;

		syncCursorAnimations():any[];

		autoscroll(suppressAutoscroll?:any):any[];

		updatePlaceholderText():any;

		updateRenderedLines(scrollViewWidth:any):any;

		computeSurroundingEmptyLineChanges(change:any):any;

		computeIntactRanges(renderFrom:any, renderTo:any):any;

		truncateIntactRanges(intactRanges:any, renderFrom:any, renderTo:any):any;

		clearDirtyRanges(intactRanges:any):any;

		clearLine(lineElement:any):any;

		fillDirtyRanges(intactRanges:any, renderFrom:any, renderTo:any):any;

		updatePaddingOfRenderedLines():any;

		getFirstVisibleScreenRow():number;

		getLastVisibleScreenRow():number;

		isScreenRowVisible():boolean;

		handleScreenLinesChange(change:any):any;

		buildLineElementForScreenRow(screenRow:any):any;

		buildLineElementsForScreenRows(startRow:any, endRow:any):any;

		htmlForScreenRows(startRow:any, endRow:any):any;

		htmlForScreenLine(screenLine:any, screenRow:any):any;

		buildIndentation(screenRow:any, editor:any):any;

		buildHtmlEndOfLineInvisibles(screenLine:any):any;

		getEndOfLineInvisibles(screenLine:any):any;

		lineElementForScreenRow(screenRow:any):any;

		toggleLineCommentsInSelection():any;

		pixelPositionForBufferPosition(position:any):any;

		pixelPositionForScreenPosition(position:any):any;

		positionLeftForLineAndColumn(lineElement:any, screenRow:any, screenColumn:any):any;

		measureToColumn(lineElement:any, tokenizedLine:any, screenColumn:any):any;

		getCharacterWidthCache(scopes:any, char:any):any;

		setCharacterWidthCache(scopes:any, char:any, val:any):any;

		clearCharacterWidthCache():any;

		pixelOffsetForScreenPosition(position:any):any;

		screenPositionFromMouseEvent(e:any):any;

		highlightCursorLine():any;

		copyPathToClipboard():any;

		buildLineHtml(_arg:any):any;

		updateScopeStack(line:any, scopeStack:any, desiredScopes:any):any;

		pushScope(line:any, scopeStack:any, scope:any):any;

		popScope(line:any, scopeStack:any):any;

		buildEmptyLineHtml(showIndentGuide:any, eolInvisibles:any, htmlEolInvisibles:any, indentation:any, editor:any, mini:any):any;

		replaceSelectedText(replaceFn:(str:string)=>string):any;

		consolidateSelections(e:any):any;

		logCursorScope():any;

		logScreenLines(start:any, end:any):any;

		logRenderedLines():any;
	}

	class ScrollView extends View {
		// TBD
	}

	class SelectListView extends View {
		// TBD
	}

	class WorkspaceView extends View {
		// TBD
	}

	var Task:AtomCore.ITaskStatic;
	var Workspace:AtomCore.IWorkspaceStatic;
}
